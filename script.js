document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.area-tags .tag');
    const experienceItems = document.querySelectorAll('.timeline-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // 2. Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            // 3. Obtém o filtro de dados (ex: 'socorros', 'social', 'todos')
            const filterValue = button.getAttribute('data-filter');

            // 4. Itera sobre os itens de experiência para filtrar
            experienceItems.forEach(item => {
                const itemAreas = item.getAttribute('data-areas');
                
                if (filterValue === 'todos' || itemAreas.includes(filterValue)) {
                    // Se corresponder ou for "todos", remove a classe 'hidden'
                    item.classList.remove('hidden');
                } else {
                    // Se não corresponder, adiciona a classe 'hidden'
                    item.classList.add('hidden');
                }
            });
        });
    });
});