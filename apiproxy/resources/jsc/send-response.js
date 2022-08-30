context.setVariable("response.header.Content-Type","application/json");
context.setVariable("response.header.Cache-Control","no-store");
context.setVariable("response.header.Pragma","no-cache");
context.setVariable("response.content", context.getVariable("credentialResponse.content"));