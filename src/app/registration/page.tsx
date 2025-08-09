"use client";
import { useState } from "react";

type FormType = "single" | "team";

export default function Page(){
  const [formType, setFormType] = useState<FormType>("single");
  const [teamStep, setTeamStep] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };
  
return(
    <div className="flex flex-col">
      <div className="flex flex-col *:mx-auto bg-foreground text-background rounded-b-[2rem] lg:rounded-b-[2rem] h-[20rem] lg:h-[26rem] pt-[2rem] relative">
        <div className="flex flex-col *:mx-auto mt-24 lg:mt-40 overflow-clip">
          <div className="text-[2rem] z-10 lg:text-[3.4rem] font-extrabold w-[20rem] lg:w-[32rem] text-center leading-[2rem] lg:leading-[3.5rem] ">Event Registration</div>
          <div className="text-center z-10 w-[20rem] lg:w-[40rem] pt-8">" Register for the events you want to participate in. "
          </div>
        </div>
        <div className="mt-16 lg:mt-48 z-10 hover:font-bold hover:cursor-pointer hover:text-lg transform duration-500 "></div>

      </div>

      <div className="grid md:grid-cols-12 gap-4 justify-center flex flex-col">
      <div className="border-2 border-foreground rounded-full flex flex-row  md:col-start-8 mt-10 w-[400px]">
        <button onClick={()=> { setFormType("single"); setTeamStep(1); }} className={`w-[200px] rounded-full text-center ${formType ==="single" ? 'bg-foreground text-background' :'text-foreground bg-background'}`} >Single</button>
        <button onClick={()=> setFormType("team")} className={`w-[200px] rounded-full text-center ${formType ==="team" ? 'bg-foreground text-background' :'text-foreground bg-background' }`}>Team</button>
      </div>

      <div className="bg-foreground p-8 rounded-lg shadow-lg w-[400px] md:col-start-8 mt-5">
        <h2 className="text-background text-center text-xl font-bold mb-6">EVENT REGISTRATION</h2>
      
        {formType === "single" ? (
          <>
        {/* Name Input */}          
        <div className="mb-4">
          <label className="block text-background mb-2">Name</label>
          <input type="text" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        {/* Roll Number Input */}
        <div className="mb-4">
          <label className="block text-background mb-2">Roll Number</label>
          <input type="text" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        {/* Mobile Number Input */}
        <div className="mb-4">
          <label className="block text-background mb-2">Mobile Number</label>
          <input type="tel" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        {/* Email ID Input */}
        <div className="mb-4">
          <label className="block text-background mb-2">Email ID</label>
          <input type="email" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        {/* Select Events */}
        <div className="mb-4">
          <label className="block text-background mb-2">Select Events</label>
          <div className="bg-background rounded-md p-3">
            <div className="flex items-center mb-2">
              <input type="checkbox" name="event" className="mr-2" />
              <span className="text-foreground">Kho-Kho</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" name="event" className="mr-2" />
              <span className="text-foreground">Kite-Flying</span>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" name="event" className="mr-2" />
              <span className="text-foreground">Rangoli</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="event" className="mr-2" />
              <span className="text-foreground">Tug-of-war</span>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="text-right">
          <button className="bg-background text-foreground px-4 py-2 rounded-md" onClick={showModal}>Submit</button>
        </div>
        </>
        ) : (
        <>
        {/* Team Registration Form */}
        {(teamStep === 1) && (
        <>
        <div className="mb-4">
          <label className="block text-background mb-2">Name of Contact</label>
          <input type="text" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        {/* Roll Number Input */}
        <div className="mb-4">
          <label className="block text-background mb-2">Roll Number</label>
          <input type="text" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        {/* Mobile Number Input */}
        <div className="mb-4">
          <label className="block text-background mb-2">Mobile Number</label>
          <input type="tel" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        {/* Email ID Input */}
        <div className="mb-4">
          <label className="block text-background mb-2">Email ID</label>
          <input type="email" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        <div className="mb-4">
          <label className="block text-background mb-2">Team Size</label>
          <input type="number" className="w-full px-3 py-2 rounded-md bg-background text-foreground" />
        </div>
        
        {/* Next Button */}
          <div className="text-right">
            <button className="bg-background text-foreground px-4 py-2 rounded-md" onClick={()=> setTeamStep(2)}>Next</button>
          </div>
        </>
      )}

          {
            teamStep === 2 && (
            <>
                {/* Team Member 1 */}
                <div className="border border-background p-4 mb-4">
                  <h2 className="text-background mb-2">Team Member 1</h2>
                  <label className="block text-background mb-1">Name</label>
                  <input type="text" className="w-full p-2 mb-4 bg-background rounded" />
                  <label className="block text-background mb-1">Roll Number</label>
                  <input type="text" className="w-full p-2 bg-background rounded" />
                </div>

                {/* Team Member 2 */}
                <div className="border border-background p-4 mb-4">
                  <h2 className="text-background mb-2">Team Member 2</h2>
                  <label className="block text-background mb-1">Name</label>
                  <input type="text" className="w-full p-2 mb-4 bg-background rounded" />
                  <label className="block text-background mb-1">Roll Number</label>
                  <input type="text" className="w-full p-2 bg-background rounded" />
                </div>

                {/* Select Events */}
                <div className="mb-4">
                  <label className="block text-background mb-2">Select Events</label>
                  <div className="bg-background rounded-md p-3">
                    <div className="flex items-center mb-2">
                      <input type="checkbox" name="event" className="mr-2" />
                      <span className="text-foreground">Kho-Kho</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <input type="checkbox" name="event" className="mr-2" />
                      <span className="text-foreground">Kite-Flying</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <input type="checkbox" name="event" className="mr-2" />
                      <span className="text-foreground">Rangoli</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" name="event" className="mr-2" />
                      <span className="text-foreground">Tug-of-war</span>
                    </div>
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-between">
                <button className="bg-background text-foreground px-4 py-2 rounded-md" onClick={()=> setTeamStep(1)}>Back</button>
                <button className="bg-background text-foreground px-4 py-2 rounded-md" onClick={()=> setTeamStep(3)}>Next</button>
                </div>
            </>
            )}
            {
              teamStep === 3 && (
              <>
                {/* Event Section */}
                <div className="mb-6">
                  <h2 className="text-background mb-2">Kho-Kho</h2>
                  <div className="bg-background p-4 rounded-lg border border-background">
                    {/* Player List */}
                    {['Player 1', 'Player 2', 'Player 3', 'Player 4'].map((player, index) => (
                      <div key={index} className="flex justify-between items-center mb-2">
                        <span className="text-foreground">{`[${player}]`}</span>
                        <input type="checkbox" name="kho-kho" className="text-background" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Section */}
                <div className="mb-6">
                  <h2 className="text-background mb-2">Kite-Flying</h2>
                  <div className="bg-background p-4 rounded-lg border border-background">
                    {/* Player List */}
                    {['Player 1', 'Player 2', 'Player 3', 'Player 4'].map((player, index) => (
                      <div key={index} className="flex justify-between items-center mb-2">
                        <span className="text-foreground">{`[${player}]`}</span>
                        <input type="checkbox" name="kite-flying" className=" text-background" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-between">
                <button className="bg-background text-foreground py-2 px-4 rounded-md" onClick={()=> setTeamStep(2)}>Back</button>
                <button className="bg-background text-foreground py-2 px-4 rounded-md" onClick={showModal}>Submit</button>
                </div>
              </>
              )}
              </>
              )}
        </div>
      </div>
      {isModalVisible && (
        <div id="successModal" className="fixed inset-0 backdrop-blur-[2px] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background text-black p-6 rounded-xl shadow-lg  w-[400px] flex flex-col items-center">
              <div className="flex flex-row ">
              <img src="registration/elephant1.svg" className="size-20"/>            
              <h2 className="text-xl text-center mt-2 font-bold text-foreground">
              REGISTRATION SUCCESSFUL</h2>
              <img src="registration/elephant2.svg" className="size-20"/>
              </div>
            <img src="registration/dancers.svg" alt="Success" className="mx-auto mb-4 rounded p-5" />
            <p className="text-center mb-4">Thank you for registering. See you at the event!</p>
            <button onClick={hideModal} className=" p-2 bg-foreground text-background rounded-md">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}