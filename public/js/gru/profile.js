(function (L) {
    var _this = null;
    L.Profile = L.Profile || {};
    _this = L.Profile = {
        data: {
        },
        init: function () {
            _this.initEvent();

        },

        initEvent: function () {
            $("#my-collections-area").on("click", "a.editCollection", function () {

            });
        },



        showTipDialog: function (title, content) {
            if (!content) {
                content = title;
                title = "Tips";
            }
            var d = dialog({
                title: title || 'Tips',
                content: content,
                width: 350,
                cancel: false,
                ok: function () {
                }
            });
            d.show();
        },



        genToken: function () {
            $.ajax({
                type: "GET",
                url: "/profile/genToken",
                data: {
                },
                success: function (result) {
                    if (result.success) {
                    } else {
                    }
                },
                error: function () {
                }
            });
        },

        formatDate: function (now) {
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            if (second < 10) second = "0" + second;
            return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
        }
    };
}(Gru));
