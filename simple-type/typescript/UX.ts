module UX{

	export class User{
		name: string;
		constructor(nombre: string){
			this.name = nombre;
		}
	}
}
import temp = Templates;


var Value: temp.Value = new temp.Value();
var jUsuario : UX.User = new UX.User("Jesus Juan");