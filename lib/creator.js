
/**
 * 执行代码生成操作
 * @param {string} op 操作内容,包括：example、init、refresh、entry、router、operator、model 
 */
function creator(op) {

    if(!checkFiles()){
        return;
    };

    switch (op) {
        case 'example':

            break;
        case 'init':
            break;
        case 'refresh':
            break;
        case 'entry':
            break;
        case 'router':
            break;
        case 'operator':
            break;
        case 'model':
            break;
        default:
            return console.log('不存在该指令');
    }
}


/**
 * 检查三个基础json文件是否存在：包括dataStructure.json、apiInterfaceSpec.json、statusAndMsg.json
 */
function checkFiles() {
    const fs = require('fs');
    const path = require('path');
    const root = process.cwd();
    const dataPath = path.resolve(root, 'dataStructure.json');
    const apiPath = path.resolve(root, 'apiInterfaceSpec.json');
    const statusPath = path.resolve(root, 'statusAndMsg.json');
    try {
        if (!fs.existsSync(dataPath) || !fs.existsSync(apiPath) || !fs.existsSync(statusPath)) {
            console.log('三个基础json文件不存在，请检查开启命令窗口位置是否正确，并检查文件是否存在');
            return false;
        }
        return true;
    } catch (e) {
        console.log('三个基础json文件访问出错');
        return false;
    }
}