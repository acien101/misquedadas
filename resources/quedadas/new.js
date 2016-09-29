module.exports = function NewQuedadas(req,res,next) {
 var body= req.body; //console.log('body: ',body);
 res.send({op: 'New quedadas'}); next()
};
