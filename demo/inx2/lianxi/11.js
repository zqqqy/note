bool uniqueOccurrences(int* arr, int arrSize){
    int count =(int)malloc(sizeof(int)*2001);
    for(int i=0;i<2001;i++)
    count[i]=0;
    for(int i=0;i<arrSize;i++)
    count[arr[i]+1000]++;
    for(int i=0;i<2000;i++)
    for(int j=i+1;j<2001;j++)
    {
        if((count[i]==count[j])&&count[j]!=0)
            return false;
    }
    return true;
}




