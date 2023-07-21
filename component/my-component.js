//my-component.js
export default{
    data(){
        return {
            nombre: null
        }
    },
    watch: {
        nombre() {
            alert(`Se ha modificado el nombre ${this.nombre}`);
        }
    }
}