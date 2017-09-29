module.exports = function(name, description){
    var name = name;
    var description = description;

    var functions = {
        setName: function(nameIn){
            this.name = nameIn;
        },

        setDescription: function(descriptionIn){
            this.description = descriptionIn;

        },

        getInfo: function(){
            return {
                name: name,
                description: description
            }
        }
    };

    return functions;
}