function skillsMember() {
    // member.js
    var member = new Member();
    member.skills = ["JavaScript", "HTML", "CSS"];
    member.skills.forEach(function(skill) {
        console.log("I know " + skill);
    });
}