
/**
 * totalLike = 10;
 * onLike()
 */
class Like{
    constructor(totalLike = 10, checkUserLike = false){
        this.totalLike = totalLike;
        this.checkUserLike = checkUserLike;
    }

    onLike(){
        this.checkUserLike ? this.totalLike -= 1 : this.totalLike += 1;
        this.checkUserLike = !this.checkUserLike
        // dk ? data for dk is true : data for dk is false 
    }
    get tongSoLike(){ // property
        return this.totalLike;
    }
    set soluotLike(number){ // property
        this.totalLike = number;
    }
}
const user = new Like;
// user.onLike();
user.soluotLike = 12;
console.log(user.tongSoLike);