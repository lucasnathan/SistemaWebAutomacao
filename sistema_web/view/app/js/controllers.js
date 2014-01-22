/* App Controllers */

function NavCtrl($location) {
    var self = this;
    self.hash = $location.hash.substring(1, $location.hash.length);

    if (self.hash == 'tv' || self.hash == 'ar' || self.hash == 'luz') {
        self.activeTab = self.hash;
    } else {
        self.activeTab = 'tv';
    }
    self.isActive = function (tabName) {
        return (self.activeTab == tabName) ? 'active' : '';
    };
}

function TvCtrl($xhr) {}
TvCtrl.$inject = ['$xhr'];

function ArCtrl($xhr) {}
ArCtrl.$inject = ['$xhr'];

function LuzCtrl() {}
LuzCtrl.$inject = [];