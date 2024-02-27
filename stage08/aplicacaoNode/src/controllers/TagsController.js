const knex = require("../database/knex");

class TagsController {
    async index(request, response) {
        const { user_id } = request.params;

        //isso basicamente diz para o knex ir na tabela tags e filtra onde seja igual o user_id
        const tags = await knex("tags")
            .where({ user_id })
            .groupBy("name")

        return response.json(tags);
    }
}

module.exports = TagsController;