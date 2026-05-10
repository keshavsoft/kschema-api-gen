const appOrRouter = "router";

const buildUseLine = ({ inEndpoint, inFuncName }) => {
    return `${appOrRouter}.use("/${inEndpoint}", ${inFuncName});`;
};

export default buildUseLine;