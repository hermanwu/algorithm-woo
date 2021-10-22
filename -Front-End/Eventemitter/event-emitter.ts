/**
不好意思 楼主 请问万年老题 emitter是什么？ 可以形容一下吗

就大概是要你创建一个class eventEmitter
里面有两个function，一个是subscribe(eventName, callback)
一个是 emit(eventName, ...args)

大概可以这么用
const sub1  = emitter.subscribe('event1', callback1)
emitter.emit('event1', 1, 2);
 */
