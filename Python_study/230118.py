# CRUD 중 UPDATE
# 수정된 사항이 있을 때만 save()함수가 실행되도록 하기

dirty = False   # 기본 False
for field, value in request.data.items():
    # 요청받은 값이랑 product에서 가져온 값이랑 다르면 -> 수정을 했다는 의미
    # or로 연결되어있으므로 하나라도 True이면 dirty는 True가 된다. 
    dirty = dirty or value != getattr(product, field)
    setattr(product, field, value)

# dirty가 True일 때만 save()가 실행되도록 한다. 
if dirty:
    product.save()