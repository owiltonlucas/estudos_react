function SeuNome({ setNome }) {
    return (
        <di>
            <p>Digite o seu nome:</p>
            <input type="text" placeholder="Qual é o seu nome?" 
            onChange={(e) => setNome(e.target.value)}
            />
        </di>
    )
}

export default SeuNome;