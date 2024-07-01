import {
    describe,
    expect,
    it,
  } from 'vitest';

import {insertAbbr} from './insert-abbr';

describe('insertAbbr', () => {
    it('должен заменить в тексте "css" на тэг аббревиатуры c текстом "CSS" и расшифровкой "Cascading Style Sheets"', () => {   
        const testText = 'Стилем или css называется набор параметров форматирования, который применяется к элементам документа';
    
        const actual = insertAbbr(testText);

        const expectedOutput = 'Стилем или <abbr title="Cascading Style Sheets">CSS</abbr> называется набор параметров форматирования, который применяется к элементам документа'
    
        expect(actual).toEqual(expectedOutput);
      });

    it('должен заменить в середине текста "html" на тэг аббревиатуры c текстом "HTML" и расшифровкой "Hyper Text Markup Language"', () => {
    
    const testText = 'Итак, html - это код, который используется для структурирования и отображения веб-страницы и её контента';

    const actual = insertAbbr(testText);

    const expectedOutput = 'Итак, <abbr title="Hyper Text Markup Language">HTML</abbr> - это код, который используется для структурирования и отображения веб-страницы и её контента'

    expect(actual).toEqual(expectedOutput);
    });

    it('должен заменить в начале текста "Html" на тэг аббревиатуры c текстом "HTML" и расшифровкой "Hyper Text Markup Language"', () => {
    
        const testText = 'Html - это код, который используется для структурирования и отображения веб-страницы и её контента';
    
        const actual = insertAbbr(testText);
    
        const expectedOutput = '<abbr title="Hyper Text Markup Language">HTML</abbr> - это код, который используется для структурирования и отображения веб-страницы и её контента'
    
        expect(actual).toEqual(expectedOutput);
        });

        it('должен заменить в тексте "js" на тэг аббревиатуры c текстом "JS" и расшифровкой "JavaScript"', () => {   
            const testText = 'JS — это легковесный интерпретируемый язык программирования с функциями первого класса.';
        
            const actual = insertAbbr(testText);
    
            const expectedOutput = '<abbr title="JavaScript">JS</abbr> — это легковесный интерпретируемый язык программирования с функциями первого класса.'
        
            expect(actual).toEqual(expectedOutput);
          });

          it('должен проигнорировать "myTests.js" в тексте', () => {   
            const testText = 'Откройте файл myTests.js';
        
            const actual = insertAbbr(testText);
    
            const expectedOutput = 'Откройте файл myTests.js';
        
            expect(actual).toEqual(expectedOutput);
          });

          it('должен вернуть пустую строку', () => {   
            const testText = '';
        
            const actual = insertAbbr(testText);
    
            const expectedOutput = '';
        
            expect(actual).toEqual(expectedOutput);
          });

          it('должен заменить все именования "html, css, js" на тэги', () => {
            const testText = 'html, css, js - заменим в тесте все.';
        
            const actual = insertAbbr(testText);
    
            const expectedOutput = '<abbr title="Hyper Text Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, <abbr title="JavaScript">JS</abbr> - заменим в тесте все.';
        
            expect(actual).toEqual(expectedOutput);
          });

});