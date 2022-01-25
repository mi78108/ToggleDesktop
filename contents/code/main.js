let desktopIndex = 1
workspace.onCurrentDesktopChanged.connect(function(desktop){
    desktopIndex = desktop

})

function switchDP(step){
    //slotSwitchDesktopNext()
    //slotSwitchDesktopPrevious()
    //slotSwitchDesktopRight()
    //slotSwitchDesktopLeft()
    if(step > 0){
        for(let i = 0; i < step; i++){
            workspace.slotSwitchDesktopRight()
        }
    }else{
        for(let i = step; i < 0; i++){
            workspace.slotSwitchDesktopLeft()
        }
    }
}
if (registerShortcut) {
    //print(">>> bindKey")
    registerShortcut("Toggle desktop","Toggle desktop","Meta+Tab",function(){
        let currentDesktop = workspace.currentDesktop
        //print(">>> click ...."+"from "+currentDesktop+" to "+desktopIndex)
        switchDP(desktopIndex - currentDesktop)
        desktopIndex = currentDesktop
    })
}else{
    //print(">>> not bindKey")
}
