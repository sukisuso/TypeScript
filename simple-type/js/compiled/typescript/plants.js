var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Plant = (function () {
    function Plant() {
    }
    Plant.prototype.getName = function (nameorid) {
        if (typeof nameorid === "string") {
            return "The name of this plant is: " + nameorid;
        }
        else {
            return nameorid;
        }
    };
    return Plant;
})();
var PlantInfo = (function (_super) {
    __extends(PlantInfo, _super);
    function PlantInfo() {
        _super.call(this);
    }
    PlantInfo.prototype.getName = function (nameorid) {
        var studentID = _super.prototype.getName.call(this, nameorid);
        return studentID;
    };
    return PlantInfo;
})(Plant);
