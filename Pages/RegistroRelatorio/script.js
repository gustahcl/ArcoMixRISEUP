const relatorios = [
    {
        data: "10/04/2025",
        visitante: "João Silva",
        tipo: "Técnico",
        empresa: "Movi Torque",
        colaborador: "Camila Rocha",
        status: "Aprovado"
    },
    {
        data: "10/04/2025",
        visitante: "Bruno Fernandes",
        tipo: "Técnico",
        empresa: "Movi Torque",
        colaborador: "Camila Rocha",
        status: "Aprovado"
    },
    {
        data: "11/04/2025",
        visitante: "Carla Menezes",
        tipo: "Técnico",
        empresa: "Movi Torque",
        colaborador: "Camila Rocha",
        status: "Recusado"
    },
    {
        data: "11/04/2025",
        visitante: "Pedro Souza",
        tipo: "Técnico",
        empresa: "Movi Torque",
        colaborador: "Camila Rocha",
        status: "Fora do horário"
    },
    {
        data: "12/04/2025",
        visitante: "Amanda Pires",
        tipo: "Técnico",
        empresa: "Movi Torque",
        colaborador: "Camila Rocha",
        status: "Aprovado"
    }
];

const dataDe = document.getElementById('dataDe');
const dataAte = document.getElementById('dataAte');
const empresaInput = document.getElementById('empresaInput');
const colaboradorInput = document.getElementById('colaboradorInput');
const tipoBtns = document.querySelectorAll('#tipoVisitanteBtns .button');
const statusBtns = document.querySelectorAll('#statusBtns .button');
let tipoSelecionado = "";
let statusSelecionado = "";

tipoBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        tipoBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        tipoSelecionado = this.getAttribute('data-value');
        filtrarTabela();
    });
});

statusBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        statusBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        statusSelecionado = this.getAttribute('data-value');
        filtrarTabela();
    });
});

// Função para converter data dd/mm/yyyy para yyyy-mm-dd
function toISODate(data) {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
}

function filtrarTabela() {
    let filtrados = relatorios.filter(r => {
        
        let passaData = true;
        if (dataDe.value) {
            passaData = toISODate(r.data) >= dataDe.value;
        }
        if (dataAte.value) {
            passaData = passaData && toISODate(r.data) <= dataAte.value;
        }

        let passaTipo = !tipoSelecionado || r.tipo === tipoSelecionado;
        let passaEmpresa = r.empresa.toLowerCase().includes(empresaInput.value.toLowerCase());
        let passaColab = r.colaborador.toLowerCase().includes(colaboradorInput.value.toLowerCase());
        let passaStatus = !statusSelecionado || r.status === statusSelecionado;

        return passaData && passaTipo && passaEmpresa && passaColab && passaStatus;
    });

    const tbody = document.querySelector('#relatorioTable tbody');
    tbody.innerHTML = "";

    document.getElementById('resultCount').textContent = `Resultados (${filtrados.length} encontrados):`;

    if (filtrados.length === 0) {
        tbody.innerHTML = "<tr><td colspan='6'>Nenhum resultado encontrado.</td></tr>";
        return;
    }

    filtrados.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${r.data}</td>
            <td>${r.visitante}</td>
            <td>${r.tipo}</td>
            <td>${r.empresa}</td>
            <td>${r.colaborador}</td>
            <td>${formatarStatus(r.status)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Ícone para status
function formatarStatus(status) {
    if (status === "Aprovado") return '✅ Aprovado';
    if (status === "Recusado") return '❌ Recusado';
    if (status === "Pendente") return '⏳ Pendente';
    if (status === "Fora do horário") return '⏰ Fora do horário';
    return status;
}

[dataDe, dataAte, empresaInput, colaboradorInput].forEach(input => {
    input.addEventListener('input', filtrarTabela);
});

tipoBtns[0].classList.add('selected');
statusBtns[0].classList.add('selected');
filtrarTabela();