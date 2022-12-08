import Alliance from "../../lib/_game/Alliance";
import Player from "../../lib/_game/Player";

import { MooMoo } from "../../../app";
type teamObj = {
    teams: Array<any>
}

function setInitData(data: teamObj) {
    let teams = data.teams;
    console.log(teams)
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i];
        let name = team.sid;
        let owner = team.owner;
        let alliance = new Alliance(new Player(owner, "idk", 1,1), name);
        console.log(alliance)
        MooMoo.teams.push(alliance);
    }
}

export default setInitData