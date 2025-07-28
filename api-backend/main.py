from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware # Essencial para permitir que seu Front-end acesse
import requests
from datetime import datetime

# Cria a instância da aplicação FastAPI
app = FastAPI(
    title="API de Cotação de Moedas",
    description="Uma API simples para obter cotações de moedas em tempo real.",
    version="1.0.0"
)

# --- Configuração do CORS (Cross-Origin Resource Sharing) ---
# O CORS é um mecanismo de segurança do navegador que impede que um site num domínio
# acesse recursos de outro domínio diretamente. Como seu Front-end (rodando localmente ou no GitHub Pages)
# estará num domínio diferente da sua API Python (rodando em http://127.0.0.1:8000),
# precisamos configurar o CORS na API para permitir essas requisições.

origins = [
    "http://127.0.0.1:5500",  # Geralmente a porta do Live Server do VS Code
    "http://localhost:5500",  # Outra forma comum do Live Servidor
    "null",                   # Permite acesso ao abrir arquivos HTML diretamente do disco (file://)
    "https://iorlly.github.io"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # Permite requisições das origens listadas acima
    allow_credentials=True,      # Permite o envio de cookies de credenciais
    allow_methods=["*"],         # Permite todos os métodos HTTP (GET, POST, PUT, DELETE)
    allow_headers=["*"],         # Permite todos os cabeçalhos HTTP
)

# --- URL da API externa de cotação de moedas ---
EXCHANGE_RATE_API_BASE_URL = "32b7eb4cd3-ecddaab88f-szgm8j0"

# --- Rotas (Endpoints) da sua API ---

@app.get("/")
async def read_root():
    """
    Endpoint raiz da API.
    """
    return {"message": "Bem-vindo à API de Cotação de Moedas!"}

@app.get("/cotacao/{moeda_par}")
async def get_cotacao(moeda_par: str):
    """
    Obtém a cotação de um par de moedas (ex: USD-BRL).
    A API externa ExchangeRate-API sempre usa uma moeda base para retornar todas as cotações.
    """
    if '-' not in moeda_par:
        raise HTTPException(status_code=400, detail="Formato de moeda inválido. Use BASE-DESTINO (ex: USD-BRL).")

    moeda_base, moeda_destino = moeda_par.split('-')
    moeda_base = moeda_base.upper()
    moeda_destino = moeda_destino.upper()

    try: