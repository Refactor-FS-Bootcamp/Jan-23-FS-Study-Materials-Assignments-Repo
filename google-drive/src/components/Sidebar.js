import React from 'react'
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import DevicesIcon from '@material-ui/icons/Devices';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import styled from 'styled-components'

const SidebarContainer = styled.div`
    margin-top: 10px;
`
const SidebarBtn = styled.div`
    button {
        background: transparent;
        border: 1px solid lightgray;
        display: flex;
        align-items: center;
        border-radius: 40px;
        padding:5px 10px;
        box-shadow:2px 2px 2px #ccc;
        margin-left: 20px;
        span {
            font-size: 16px;
            margin-right: 20px;
            margin-left: 10px;
        }
    }
`

const SidebarOptions = styled.div`
    margin-top: 10px;
    .progress_bar {
        padding: 0px 20px;
    }
    .progress_bar span {
        display: block;
        color:#333;
        font-size: 13px;
    }
`

const SidebarOption = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 20px;
    border-radius: 0px 20px 20px 0px;
    &:hover{
        background: whitesmoke;
        cursor: pointer;
    }
    svg.MuiSvgIcon-root {
        color:rgb(78, 78, 78);
    }
    span {
        margin-left: 15px;
        font-size: 13px;
        font-weight: 500;
        color:rgb(78, 78, 78)
    }
`

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarBtn>
                <button>
                    <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" />
                    <span>New</span>
                </button>
            </SidebarBtn>
            <SidebarOptions>
                <SidebarOption>
                    <MobileScreenShareIcon /><span>My Drive</span>
                </SidebarOption>
                <SidebarOption>
                    <DevicesIcon /><span>Computers</span>
                </SidebarOption>
                <SidebarOption>
                    <PeopleAltOutlinedIcon /><span>Shared with me</span>
                </SidebarOption>
                <SidebarOption>
                    <QueryBuilderOutlinedIcon /><span>Recent</span>
                </SidebarOption>
                <SidebarOption>
                    <StarBorderOutlinedIcon /><span>Starred</span>
                </SidebarOption>
                <SidebarOption>
                    <DeleteOutlineOutlinedIcon /><span>Trash</span>
                </SidebarOption>
            </SidebarOptions>
            <hr />
            <SidebarOptions>
                <SidebarOption>
                    <CloudQueueIcon />
                    <span>Storage</span>
                </SidebarOption>
                <div className="progress_bar">
                    <progress size="tiny" value="50" max="100" />
                    <span>105 GB  of 200 GB used</span>
                </div>
            </SidebarOptions>
        </SidebarContainer>
    )
}

export default Sidebar