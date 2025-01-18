

// Class to use for modifying the game entites, objects, player, consumables, etc. (actors);
export class Interface {
    constructor(handleGameActors) {

        this.addEventListeners();

        this.handleGameActors = handleGameActors;
    }

    addEventListeners() {

        document.getElementById("create-entity").addEventListener("click", () => {
            this.handleGameActors.createEntity()
        })

    }
}