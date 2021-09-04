const about = {};

about.aboutHandlers = (requestedProperties, callBack) => {
    callBack(200, {
        message: "this is about"
    });
};

module.exports = about;
