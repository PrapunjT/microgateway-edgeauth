var req = JSON.parse(context.getVariable("request.content"))
context.setVariable("key", req.key)
context.setVariable("secret",req.secret)