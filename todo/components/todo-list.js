Vue.component('todo-list', {
    template: `
        <ul>
            <li v-for="item in todos" >
                {{ item.label }} 
                    <button type="buttton" @click="onDeleteItem(item)">Del</button>
                </li>
        </ul>
    `,
    props: [ 'todos' ],
    methods: {
        onAddItem: 
        onDeleteItem: function (item) {
            this.todos.findIndex( function (todo) {
                return todo.id = item.id;
            });
            this.todos.splice(index. 1);
        }
    },
});