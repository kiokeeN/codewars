// https://www.codewars.com/kata/5412509bd436bd33920011bc

const maskify = (cc) => cc.length >= 5 ? '#'.repeat(cc.length - 4) + cc.slice(cc.length -4) : cc
