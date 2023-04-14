// https://www.codewars.com/kata/52b305bec65ea40fe90007a7

const grabscrab = (anag, dict) => {
    anag = anag.split('').sort().join('');
    return dict.filter(el => el.length === anag.length && el.split('').sort().join('') == anag);
}