// jsTool 

const isType = function(type){
    return function(obj){
        return Object.prototype.toString.call(obj) === '[object '+type+']'
    }
}
/** 
 * @param {Array|Object} collection 
 * @param {Function} predicate
 */
const findIndex = function(collection, predicate){
    let index = 0;
    while( index < collection.length){
        if(predicate(collection[index], index, collection)){
            return index
        }
        index++
    }
    return -1
}

/** 
 * Iterates over collection 遍历集合。 找到匹配项
 * @param {Array|Object} collection 
 * @param {Function} predicate 每次遍历invoked调用
 */
const find = function(collection, predicate){
    let index;
    if(isType('Array')(collection)){
        // console.log('array',collection)
        index = findIndex(collection, predicate)
        return collection[index]
    }else if(isType('Object')(collection)){
        // console.log('object',collection)
        // collection 为对象
        let keys = Object.keys(collection);
        // console.log('keys', keys)

        let iteratee = function(key){
            return predicate(collection[key], key, collection)
        }
        index = findIndex(keys, iteratee);
        return collection[keys[index]]
    }
}

/**
 * 有限次数执行函数，并且返回最近调用时的结果
 * @param {*} n 第n次执行函数时，func不再执行
 * @param {*} func 
 */
function before(n, func){
    let result
    if(typeof func !=='function'){
        throw new TypeError('Expected a function')
    }
    return function(...args){
        if(--n > 0){
            return result = func.apply(this, args)
        }
        if(n<=1){
            func = undefined  //清除闭包引用，清理内存
        }
        return result
    }
}

const jsTool = {
    find,
    before
}

export default jsTool