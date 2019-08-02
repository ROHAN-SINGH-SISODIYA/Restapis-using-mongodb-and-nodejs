# Restapis-using-mongodb-and-nodejs

#MODELS                                                                                                                                        
User: (first name,last name)                                                                                                                    
Song: (title,artist,album name,genre)                                                                                                                          
Artist: (first name,last name,is_famous)                                                                                                       
Comments: (userID,songID,Comment)

#APIS
-> http://localhost:808/api/newUser                                                                                                                
          firstName - ' '                                                                                                                      
          lastName  - ' '                                                                                                                         
          
-> http://localhost:808/api/newSong                                                                                                               
          title - ' '                                                                                                                            
          artist - ' '                                                                                                                              
          album_name - ' '                                                                                                                         
          genre - ' '    
          
-> http://localhost:808/api/newArtist                                                                                                                
          firstName - ' '                                                                                                                      
          lastName  - ' '  
          is_famous - ' '
          
-> http://localhost:808/api/famousSongs                                                                                                               
          title - ' '                                                                                                                            
          artist - ' '                                                                                                                              
          album_name - ' '                                                                                                                         
          genre - ' '   
          
-> http://localhost:808/api/addComment                                                                                                               
          UserID - ' '                                                                                                                            
          SongID - ' '                                                                                                                              
          Comment - ' '
          
  *** Adding Comment on Song
  *** user can not comment more than one time
  *** Show list of song only of famous artists 
