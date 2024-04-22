import Character from './character';
import Team from './team';

const unit1 = new Character('Red', 'Hacker', 50, 1, 40, 10);
const unit2 = new Character('Gar', 'Palladin', 70, 2, 550, 20);
const unit3 = new Character('Zed', 'Spy', 50, 3, 25, 15);
const unit4 = new Character('Lons', 'Raider', 30, 1, 25, 15);

const newTeam = new Team();

newTeam.addUnit(unit1);
newTeam.addUnit(unit2);
newTeam.addUnit(unit3);
newTeam.addUnit(unit4);

for(let item of newTeam){
        console.log(item);
}
