import { TranslatorInterface } from './translator.interface'

export interface TemplateInterface {
    key: string,
    type: symbol,
    translator: TranslatorInterface
}