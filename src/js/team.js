export default class Team {
        constructor(){
                    this.units = new Set();
        }
    
        addUnit(unit){
                    this.units.add(unit)          
                    
        }
            
        [Symbol.iterator]() {
            let current = 0;
            let last = this.units
    
            return {         
                next() {
                    if (current < last.size) {// у нас используется Set()!!!
                        return {
                            done: false,
                            value: [...last][current++]
                        };
                    } else {
                      return {
                        done: true
                      };
                    }
                    
                }
            }
      }
    }