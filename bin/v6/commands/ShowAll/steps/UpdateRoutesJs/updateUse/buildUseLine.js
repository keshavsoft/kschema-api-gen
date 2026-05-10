const buildUseLine = ({ inEndpoint, inFuncName }) => {
    return `app.use("/${inEndpoint}", ${inFuncName});`;
};

export default buildUseLine;