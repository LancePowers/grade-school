function School() {
    this.schoolRoster = {};
}

School.prototype.roster = function () {
    for (var i = 0; i < 6; i++) {
        if (this.schoolRoster[i]) {
            this.schoolRoster[i].sort();
        }
    }
    return this.schoolRoster;
}

School.prototype.add = function (name, grade) {
    if (!this.schoolRoster[grade]) {
        this.schoolRoster[grade] = [name];
    } else {
        this.schoolRoster[grade].push(name)
    }
}

School.prototype.grade = function (grade) {
    var arr = this.schoolRoster[grade] || [];
    return arr.sort();
}
module.exports = School