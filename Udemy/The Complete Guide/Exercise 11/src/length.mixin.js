export const length = {
    computed: {
        calculateLength () {
            return this.name + ' (' + this.name.length + ')';
        }
    }
}