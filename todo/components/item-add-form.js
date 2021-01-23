Vue.component('item-add-form', {
    template: `
        <form>
            <input v-model="label" />
            <button type="button" v-on:click="onAdd">Добавить</button>
        </form>
    `,
    data: function() {
        return {
            label: ''
        }
    },
    methods: {
        onAdd: function () {
            this.$emit('on-add-item', this.label);
        }    
    }
})