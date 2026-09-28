import test from "node:test";import assert from "node:assert/strict";import{ipVersion,isIp,isIpv4,isIpv6}from"../src/index.js";
test("ipv4",()=>{assert.equal(isIpv4("127.0.0.1"),true);assert.equal(ipVersion("127.0.0.1"),4);});
test("ipv6",()=>assert.equal(isIpv6("2001:db8::1"),true));
test("invalid",()=>assert.equal(isIp("999.1.1.1"),false));
