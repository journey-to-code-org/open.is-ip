import { isIP } from "node:net";
export const ipVersion=v=>typeof v==="string"?isIP(v):0;
export const isIp=v=>ipVersion(v)!==0;
export const isIpv4=v=>ipVersion(v)===4;
export const isIpv6=v=>ipVersion(v)===6;
