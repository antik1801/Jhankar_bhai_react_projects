const showToastMessage = (message="The item is already added") => {
    toast.success({message}, {
        position: toast.POSITION.TOP_RIGHT
    });
};
