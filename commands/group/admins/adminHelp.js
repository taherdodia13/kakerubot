const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const handler = async (sock, msg, from, args, msgInfoObj) => {
    let { prefix } = msgInfoObj;

    const admin = `
---------------------------------------------------------------
    ─「 *Admin Commands* 」─
---------------------------------------------------------------

${readMore}

    
*${prefix}add <phone number>*
    _Add any new member!_

*${prefix}ban <@mention>*
    _Kick any member out from group!_
    _Alias with ${prefix}remove, ${prefix}kick_

*${prefix}promote <@mention>*
    _Give admin permission to a member!_

*${prefix}demote <@mention>*
    _Remove admin permission of a member!_

*${prefix}blockc* _commands_
    _block command for a group_
    _${prefix}blockc insta_
    _not type all alias of insta command_

*${prefix}removec* _commands_
    _unblock commands for a group_
    _${prefix}removec insta_

*${prefix}emptyc*
    _Unblock all commands_

*${prefix}rename <new-subject>*
    _Change group subject!_

*${prefix}welcome*
    _Set group welcome message!_
    _Auto set my bot "Welcome {user} to {group Name}."_
    _Set message will show in next line by default._
    eg: Welcome Kakeru to KakeruTest
        Give respect and take respect!
    ${prefix}welcome reset 
    _Reset welcome message!_

*${prefix}chat <on/off>*
    _Enable/disable group chat_
    _${prefix}chat on - for everyone!_
    _${prefix}chat off - for admin only!_

*${prefix}count*
    _Get message count of members_

*${prefix}link*
    _Give the group link_

*${prefix}warn <@mention>*
    _Give Waring to a person_
    _Bot Will kick if person got 3 warning!_

*${prefix}unwarn <@mention>*
    _remove Waring to a person!_
    
*${prefix}tagall*
    _For attendance alert_
    _Eg: ${prefix}tagall message!_

♥ мα∂є ωιтн ℓσνє, υѕє ωιтн ℓσνє ♥️`

    sock.sendMessage(from, { text: admin });
}

module.exports.command = () => ({ cmd: ["admin"], handler });