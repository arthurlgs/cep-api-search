import { useState } from 'react'

export interface Cep {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

async function buscaCep(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return await response.json()
}

export const CepSearch = () => {
    // Adicionamos um estado para controlar o que está escrito no input em tempo real
    const [cepInput, setCepInput] = useState("")
    
    const [cepData, setCepData] = useState<Cep | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    // ✨ A MÁGICA DA MÁSCARA ACONTECE AQUI ✨
    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 1. Pega o que o usuário digitou e remove tudo que NÃO for número
        let valor = event.target.value.replace(/\D/g, "");

        // 2. Limita a 8 números (para evitar que o usuário digite infinitamente)
        valor = valor.slice(0, 8);

        // 3. Se tiver mais de 5 números, coloca o traço entre o 5º e o 6º número
        if (valor.length > 5) {
            valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
        }

        // 4. Atualiza o estado, o que faz o input atualizar na tela instantaneamente
        setCepInput(valor);
    }

    async function getCep(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // Removemos o traço do nosso estado para poder validar e buscar na API
        const cepLimpo = cepInput.replace("-", "");

        setCepData(null)
        setError(null)

        const apenasNumeros = /^\d{8}$/.test(cepLimpo);
        
        if (!apenasNumeros) {
            setError('O CEP deve conter exatamente 8 números.')
            return
        }

        try {
            setIsLoading(true)
            const data = await buscaCep(cepLimpo)

            if (data.erro) {
                setError('CEP não encontrado em nossa base de dados.')
                return
            }

            setCepData(data)
        } catch (error) {
            setError('Erro de conexão ao buscar o CEP. Tente novamente.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-xl shadow-sm mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Buscador de CEP</h2>

            <form onSubmit={getCep} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor='cep' className="text-sm font-medium text-gray-700">
                        Digite seu CEP
                    </label>
                    <input 
                        type='text' 
                        name='cep' 
                        id='cep'
                        value={cepInput} // O React agora controla o valor exibido
                        onChange={handleCepChange} // Chama a função a cada tecla apertada
                        placeholder="Ex: 01001-000"
                        maxLength={9} // 8 números + 1 traço = 9 caracteres máximos
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>
                
                <button 
                    type='submit' 
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:bg-blue-400"
                >
                    {isLoading ? 'Buscando...' : 'Buscar'}
                </button>
            </form>

            <div className="mt-6">
                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-100 text-sm font-medium text-center">
                        <p>{error}</p>
                    </div>
                )}

                {cepData && (
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 space-y-2">
                        <p className="text-sm"><strong className="text-gray-700">CEP:</strong> {cepData.cep}</p>
                        <p className="text-sm"><strong className="text-gray-700">Logradouro:</strong> {cepData.logradouro}</p>
                        {cepData.complemento && (
                            <p className="text-sm"><strong className="text-gray-700">Complemento:</strong> {cepData.complemento}</p>
                        )}
                        <p className="text-sm"><strong className="text-gray-700">Bairro:</strong> {cepData.bairro}</p>
                        <p className="text-sm"><strong className="text-gray-700">Cidade:</strong> {cepData.localidade}</p>
                        <p className="text-sm"><strong className="text-gray-700">Estado:</strong> {cepData.estado} ({cepData.uf})</p>
                    </div>
                )}
            </div>
        </div>
    )
}