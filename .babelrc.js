module.exports = {
    presets: [
        require("@babel/preset-env")
        [
        "@vue/app",
            {
                "targets": {
                    "ie": "11"
                }
            }
        ]
    ]
};