class Plant {
	constructor() {
	}
	getName(nameorid: any): string {
		if (typeof nameorid === "string") {
			return "The name of this plant is: " + nameorid;
		}
		else {
			return nameorid;
		}
	}
}

class PlantInfo extends Plant {
	constructor() {
		super()
	}

	getName(name: string): string;
	getName(id: number): string;
	getName(nameorid: any): string {
		var studentID = super.getName(nameorid);
		return studentID;
	}
}

