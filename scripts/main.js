import { getAll } from './db.js';

const table = document.querySelector('table.table');


const generateTable = (data = []) => {
    console.log(data);

    const thead = document.createElement('thead');

    table.appendChild(thead);

    const keys = Object.keys(data[0]);

    const tr = document.createElement('tr');
    thead.appendChild(tr);
    
    keys.forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        tr.appendChild(th);
    });
   
    const th = document.createElement('th');
    th.appendChild = (th);
    const actionTh = document.createElement('th');
    actionTh.innerText = 'Műveletek';
    tr.appendChild(actionTh);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    data.forEach(row => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        keys.forEach(key => {
            const td = document.createElement('td');
            td.innerText = row[key];
            tr.appendChild(td);
        });
        const td = document.createElement('td');
        tr.appendChild(td);
        
        const btnGroup = document.createElement('div');
        td.appendChild(btnGroup);
        btnGroup.classList.add('btn-group');
        
        const infoBtn = document.createElement('button');
        btnGroup.appendChild(infoBtn);
        infoBtn.classList.add('btn', 'btn-info');
        infoBtn.innerText = 'Info';
        
        infoBtn.addEventListener('click', () => {
            alert(JSON.stringify(row, null, 2));
        });
        
        const deleteBtn = document.createElement('button');
        btnGroup.appendChild(deleteBtn);
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.innerText = 'Delete';
        
        deleteBtn.addEventListener('click', async () => {
            if (confirm('Biztos?')) {
                await remove(row.id);
                tr.parentElement.removeChild(tr);
                alert('A ${row.id} sor törölve.');
            }
        });

    });

};


getAll().then(data => generateTable(data));


