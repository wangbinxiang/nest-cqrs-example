import { initModelInterface } from '../../system/models/init-model.interface'
import { TranslatorInterface } from '../../system/translator/translator.interface'

const IS_OBJECT = Symbol("IS_OBJECT")
const IS_ARRAY = Symbol("IS_ARRAY")

export abstract class BaseTranslator<T extends initModelInterface> implements TranslatorInterface {

    protected readonly template: object
    protected  object: T

    protected readonly IS_OBJECT: symbol = IS_OBJECT
    protected readonly IS_ARRAY: symbol = IS_ARRAY



    // constructor(private readonly object: T) { }

    arrayToObject(data: any) {
        this.initObject()
        for(let key in this.template) {
            const value = this.template[key]
            
            if(value instanceof Object) {
                if (value.type === this.IS_OBJECT) {
                    this.object[key] = value.translator.arrayToObject(data[value.key])
                } else if (value.type === this.IS_ARRAY) {
                    this.object[key] = []
                    for(const item of data[value.key]) {
                        this.object[key].push(
                            value.translator.arrayToObject(item)
                        )
                    }
                }
            } else {
                console.log('---------------hasOwnProperty----------------')
                console.log(this.object)
                console.log('hasOwnProperty:' + key)
                console.log(this.object.hasOwnProperty(key))
                console.log('---------------hasOwnProperty----------------')
                this.object[key] = data[value]
            }
        }

        return this.object
    }


    protected initObject(){
        this.object.init()
    }



    // arrayToObject(data: any, obj: T, template?: object) {
    //     console.log('----------arrayToObject--------')
    //     console.log(data)
    //     console.log(obj)
    //     template = template|| this.template
    //     console.log(template)
    //     for(let key in template) {
    //         const value = template[key]
    //         // 是对象
    //         if(value instanceof Object) {
    //             console.log('-----------------')
    //             console.log(value)

    //             value.key // 对象的key
    //             value.template // 对象的template

    //             // 数据 data[value.key]
    //             // 赋值的对象 obj[key]
    //             // 模板 value.template
    //             this.arrayToObject(data[value.key], obj[key], value.template)
    //         } else if (value instanceof Array) {
    //             // 是数组
    //             console.log('-----------------是数组-------------')
    //             console.log(value)

    //             // 数据 data[value[0]]
    //             // 赋值的对象 obj[key]
    //             // 模板 value[1]
    //             for(const item of data[value[0]]) {
    //                 // 需要对应的对象
    //                 // const newObj = {} as Post
    //                 // obj.posts : Post[]
    //                 obj[key].push(
    //                     this.arrayToObject(item, obj[key], value[1])
    //                 )
    //             }
    //             this.arrayToObject(data[value[0]], obj[key], value[1])

    //         } else {
    //             // 是字段
                
    //             obj[key] = data[value]
    //         }
    //     }
    // }
}