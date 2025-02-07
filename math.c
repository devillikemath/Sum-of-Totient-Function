#include <stdio.h>
#include <time.h>
#define true 1
#define false 0
int ealur(int num, int arry[]);
int no(int num);
int ealur(int num, int arry[]){
    for(int i=2;i<=num;i++){
        if(num%i==0 && !(num<=1)){
            arry[i]=1;
            return ealur(num/i,arry);
        };
    }
    return 0;
}
int no(int num) {
    int arry[num];
    for(int j=0;j<=num;j++) arry[j]=0;
    ealur(num,arry);
    for(int i=2;i<=num;i++){
        if(arry[i]==1){
            for(int k=1;k<=num/i;k++){arry[i*k]=1;};
        }
    }
    int total = 0;
    for(int k=0;k<=num;k++) {total = arry[k]+total;};
    printf("%d\n",num-total);
    return 0;
}
int main(){
    int num;
    int time;
    printf("what is the number");
    scanf("%d",&num);
    clock_t start = clock();
    for(int i=1;i<=num;i++)no(i);
    clock_t end = clock();
    time = (double)(end - start) / CLOCKS_PER_SEC;
    printf("time is %d s",time);
    return 0;
}
