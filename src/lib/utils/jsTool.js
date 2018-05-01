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

const jsTool = {
    find
}

export default jsTool