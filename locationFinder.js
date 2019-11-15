/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  
    let devices = [ {id:10, location:"CH"}, {id:20, location:"GS"}]
    let map = new Map()
    for(i=0; i < devices.length; i++){
      map.set(devices[i].id, devices[i].location)
    }
    
    let message = req.query.message || req.body.message || 'Hello World!';
    res.status(200).send(map.get(parseInt(req.query.id)));
  };
  
  